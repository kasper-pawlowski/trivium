@echo off
setlocal enabledelayedexpansion

set "current_time=%time%"
set "current_time=%current_time::=-%"
set "current_date=%date%"
set "current_date=%current_date:/=-%"
set "commit_msg=Automatic commit on %current_date% at %current_time%"

echo %commit_msg%

git add .
git commit -m "%commit_msg%"
git push
