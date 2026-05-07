const fs = require('fs');
const path = require('path');

const driveDir = path.join(__dirname, 'public', 'images', 'drive');
const outputFile = path.join(__dirname, 'src', 'data', 'products.json');

if (!fs.existsSync(path.dirname(outputFile))) {
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

let products = [];
let idCounter = 1;

if (fs.existsSync(driveDir)) {
    const categories = fs.readdirSync(driveDir).filter(f => fs.statSync(path.join(driveDir, f)).isDirectory());
    
    for (const category of categories) {
        const catDir = path.join(driveDir, category);
        const files = fs.readdirSync(catDir).filter(f => !f.startsWith('.trashed') && f.match(/\.(jpg|jpeg|png|webp)$/i));
        
        for (const file of files) {
            // Rename file to remove spaces or special chars if necessary
            const ext = path.extname(file);
            const cleanName = file.replace(/[^a-zA-Z0-9.-]/g, '_');
            if (cleanName !== file) {
                fs.renameSync(path.join(catDir, file), path.join(catDir, cleanName));
            }
            
            // Format name for display
            let displayName = cleanName.replace(ext, '').replace(/_/g, ' ').replace(/-/g, ' ');
            
            // Format category name for display
            let displayCategory = category.replace(/_/g, ' ')
                                          .replace(/Bracelts/ig, 'Bracelets')
                                          .replace(/\b\w/g, c => c.toUpperCase());
            
            products.push({
                id: idCounter++,
                name: displayName.trim() || 'Jewellery Piece',
                category: displayCategory,
                image: `/images/drive/${category}/${cleanName}`
            });
        }
    }
}

fs.writeFileSync(outputFile, JSON.stringify(products, null, 2));
console.log(`Generated ${products.length} products into src/data/products.json`);
