#!/bin/bash

echo "🔍 Checking Portfolio for Deployment Issues..."
echo ""

# Check if required files exist
echo "✅ Checking Required Files:"
files=("index.html" "resume.html" "style.css" "script.js" "image/heang-sat.jpg")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ $file exists"
    else
        echo "  ✗ $file MISSING!"
        exit 1
    fi
done

echo ""
echo "✅ Checking for Common Issues:"

# Check for localhost references
if grep -r "localhost\|127\.0\.0\.1" --include="*.html" --include="*.js" --include="*.css" . 2>/dev/null | grep -v ".git"; then
    echo "  ✗ Found localhost references!"
else
    echo "  ✓ No localhost references"
fi

# Check for console.log
if grep -r "console\.log\|debugger" --include="*.js" . 2>/dev/null | grep -v ".git"; then
    echo "  ⚠ Found console.log (not critical)"
else
    echo "  ✓ No debug code"
fi

# Check for broken relative paths
if grep -r "src=\"/\|href=\"/" --include="*.html" . 2>/dev/null | grep -v "https://" | grep -v ".git"; then
    echo "  ⚠ Found absolute paths (may cause issues)"
else
    echo "  ✓ All paths are relative"
fi

echo ""
echo "✅ File Size Check:"
total_size=$(du -sh . 2>/dev/null | cut -f1)
echo "  Total size: $total_size"

echo ""
echo "🎉 Portfolio is ready for deployment!"
echo ""
echo "Next steps:"
echo "  1. git add ."
echo "  2. git commit -m 'Update portfolio'"
echo "  3. git push origin main"
echo ""
echo "Live URL: https://heangsat.github.io/portfolio.github.io/"
