@echo off
setlocal enabledelayedexpansion

for /f "usebackq tokens=1-6 delims=/: " %%d in (`powershell Get-Date -Format dd-MM-yyyy-HH-mm`) do (
    set "current_date=%%d-%%e-%%f"
    set "current_time=%%g:%%h"
)

set "commit_msg=%current_date% - %current_time%"

echo %commit_msg%

git add .
git commit -m "%commit_msg%"
git push
