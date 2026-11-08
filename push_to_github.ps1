# Push portfolio to GitHub
$git = "$env:LOCALAPPDATA\Programs\MinGit\cmd\git.exe"
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host " Pushing to https://github.com/prempatil7175/portfolio.git" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

if (-not (Test-Path $git)) {
    Write-Error "Git not found at $git"
    exit 1
}

& $git push -u origin main

