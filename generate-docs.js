const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  srcDir: './src',         // Source directory to scan
  outputFile: 'project-documentation.md', // Output markdown file
  ignorePatterns: [        // Files/folders to ignore
    'node_modules',
    '.git',
    '.DS_Store',
    '*.test.js',
    '*.test.jsx',
    '*.test.ts',
    '*.test.tsx',
    '*.spec.js',
    '*.spec.jsx',
    '*.spec.ts',
    '*.spec.tsx',
    '*.d.ts'
  ],
  fileExtensions: [        // File extensions to include
    '.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.sass', '.less', 
    '.json', '.html'
  ]
};

// Initialize markdown content
let markdownContent = `# React Project Documentation\n\nGenerated on: ${new Date().toLocaleString()}\n\n`;
markdownContent += `## Project Structure\n\n`;

// Create a tree representation of the project structure
function generateProjectTree(dir, indent = '') {
  const items = fs.readdirSync(dir);
  
  items.forEach((item, index) => {
    const itemPath = path.join(dir, item);
    
    // Skip if item matches ignore patterns
    if (CONFIG.ignorePatterns.some(pattern => 
        pattern.includes('*') 
          ? item.endsWith(pattern.replace('*', '')) 
          : item === pattern)) {
      return;
    }
    
    const isLast = index === items.length - 1;
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      markdownContent += `${indent}${isLast ? '└── ' : '├── '}📁 **${item}/**\n`;
      generateProjectTree(itemPath, `${indent}${isLast ? '    ' : '│   '}`);
    } else {
      if (CONFIG.fileExtensions.includes(path.extname(item))) {
        markdownContent += `${indent}${isLast ? '└── ' : '├── '}📄 ${item}\n`;
      }
    }
  });
}

// Generate file content documentation
function generateFileDocumentation(dir) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    
    // Skip if item matches ignore patterns
    if (CONFIG.ignorePatterns.some(pattern => 
        pattern.includes('*') 
          ? item.endsWith(pattern.replace('*', '')) 
          : item === pattern)) {
      return;
    }
    
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      // Create a section for this directory
      markdownContent += `\n## ${path.relative(CONFIG.srcDir, itemPath)}\n\n`;
      generateFileDocumentation(itemPath);
    } else {
      // Only process files with specified extensions
      if (CONFIG.fileExtensions.includes(path.extname(item))) {
        const relativeFilePath = path.relative(CONFIG.srcDir, itemPath);
        const fileContent = fs.readFileSync(itemPath, 'utf8');
        
        markdownContent += `\n### ${relativeFilePath}\n\n`;
        
        // Determine the language for the code block based on file extension
        let language;
        switch (path.extname(item)) {
          case '.js':
          case '.jsx':
            language = 'javascript';
            break;
          case '.ts':
          case '.tsx':
            language = 'typescript';
            break;
          case '.css':
            language = 'css';
            break;
          case '.scss':
          case '.sass':
            language = 'scss';
            break;
          case '.less':
            language = 'less';
            break;
          case '.json':
            language = 'json';
            break;
          case '.html':
            language = 'html';
            break;
          default:
            language = 'plaintext';
        }
        
        markdownContent += `\`\`\`${language}\n${fileContent}\n\`\`\`\n\n`;
        
        // Add separator
        markdownContent += `---\n`;
      }
    }
  });
}

// Main function
function generateDocumentation() {
  try {
    // Ensure src directory exists
    if (!fs.existsSync(CONFIG.srcDir)) {
      console.error(`Error: Source directory '${CONFIG.srcDir}' does not exist.`);
      return;
    }
    
    console.log(`Generating documentation for ${CONFIG.srcDir}...`);
    
    // Generate project structure tree
    markdownContent += `\`\`\`\n`;
    generateProjectTree(CONFIG.srcDir);
    markdownContent += `\`\`\`\n\n`;
    
    // Add documentation section heading
    markdownContent += `## File Contents\n\n`;
    markdownContent += `The following sections contain the content of each file in the project.\n\n`;
    
    // Generate documentation for each file
    generateFileDocumentation(CONFIG.srcDir);
    
    // Write to output file
    fs.writeFileSync(CONFIG.outputFile, markdownContent);
    
    console.log(`Documentation successfully generated: ${CONFIG.outputFile}`);
  } catch (error) {
    console.error('Error generating documentation:', error);
  }
}

// Run the documentation generator
generateDocumentation();