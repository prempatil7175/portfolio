@echo off
setlocal
echo ========================================================
echo  MUKESH PATIL PORTFOLIO - PUSH TO GITHUB
echo ========================================================
echo Target: https://github.com/prempatil7175/portfolio.git
echo.

set "PATH=%LOCALAPPDATA%\Programs\MinGit\cmd;%PATH%"

where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git could not be located in %LOCALAPPDATA%\Programs\MinGit\cmd
    pause
    exit /b 1
)

echo Authenticating and pushing to GitHub...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo  SUCCESS: Code pushed to GitHub successfully!
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo  NOTE: If prompted for password, GitHub requires a
    echo  Personal Access Token (PAT) instead of your password.
    echo ========================================================
)

pause
