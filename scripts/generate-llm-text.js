const { source } = require('../src/lib/source');
const { writeFileSync } = require('fs');
const path = require('path');

async function generateLLMText() {
  try {
    const scan = source.getPages().map(page => source.getLLMText(page));
    const scanned = await Promise.all(scan);
    const content = scanned.join('\n\n');

    // 确保目录存在
    const publicDir = path.join(__dirname, '..', 'public');
    const outputPath = path.join(publicDir, 'llms-full.txt');

    // 写入文件
    writeFileSync(outputPath, content);
    console.log('Successfully generated llms-full.txt');
  } catch (error) {
    console.error('Error generating llms-full.txt:', error);
    process.exit(1);
  }
}

generateLLMText();
