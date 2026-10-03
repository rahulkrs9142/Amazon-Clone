# ==============================================================================
# Amazon Clone - 15-Day Daily GitHub Push Script
# Usage:
#   .\daily_push.ps1           (Pushes the next scheduled day)
#   .\daily_push.ps1 -Day 4    (Pushes a specific day)
# ==============================================================================

param (
    [int]$Day = 0
)

$stateFile = Join-Path $PSScriptRoot ".current_day"

if ($Day -eq 0) {
    if (Test-Path $stateFile) {
        $Day = [int](Get-Content $stateFile)
    } else {
        $Day = 2 # Day 1 is done
    }
}

if ($Day -gt 15) {
    Write-Host "[DONE] All 15 days of Amazon Clone have already been pushed to GitHub!" -ForegroundColor Green
    exit 0
}

Write-Host "[INFO] Preparing Day $Day update for GitHub..." -ForegroundColor Cyan

# 15-Day Commit Map
$commitMessages = @{
    2  = "Day 2: Refactor navbar layout, responsive flex spacing and .in domain"
    3  = "Day 3: Add interactive delivery location selector and pincode modal"
    4  = "Day 4: Integrate electronics sale promotional hero banner and overlay"
    5  = "Day 5: Add fashion festival banner, carousel controls and auto-sliding"
    6  = "Day 6: Build 8-box core shopping category showcase grid with hover zoom"
    7  = "Day 7: Add lightning deals section with real-time countdown timer"
    8  = "Day 8: Add high-resolution lightning deals cards, ratings and prices"
    9  = "Day 9: Implement featured product catalog with dynamic filter tabs"
    10 = "Day 10: Add smart search bar with department filter and live autocomplete"
    11 = "Day 11: Build Amazon slide-out side menu navigation drawer"
    12 = "Day 12: Implement shopping cart drawer with free shipping progress bar"
    13 = "Day 13: Add simulated checkout modal with confetti celebration"
    14 = "Day 14: Add dark mode theme switch and local storage persistence"
    15 = "Day 15: Final polish, trust benefits, updated README documentation"
}

# Pull latest origin
git pull origin main

if ($Day -ge 2 -and $Day -le 14) {
    # Check out incrementally from feature/full-upgrade
    git checkout feature/full-upgrade -- index.html style.css script.js
    
    # Copy images as required for deals/banners
    if ($Day -ge 4) { git checkout feature/full-upgrade -- hero_banner2.jpg }
    if ($Day -ge 5) { git checkout feature/full-upgrade -- hero_banner3.jpg }
    if ($Day -ge 8) { git checkout feature/full-upgrade -- deal_*.jpg }
    if ($Day -eq 15) { git checkout feature/full-upgrade -- README.md preview_*.png }
} elseif ($Day -eq 15) {
    git checkout feature/full-upgrade -- .
}

# Advance .current_day counter before committing so it tracks properly
$nextDay = $Day + 1
Set-Content -Path $stateFile -Value $nextDay

# Stage and commit
git add .
$msg = $commitMessages[$Day]
if (-not $msg) { $msg = "Day ${Day}: Progressive updates to Amazon Clone" }

git commit -m "$msg"
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "[SUCCESS] Day $Day successfully committed and pushed to GitHub!" -ForegroundColor Green
    Write-Host "[NEXT] Next scheduled run: Day $nextDay" -ForegroundColor Yellow
} else {
    Write-Host "[ERROR] Git push failed. Please check network connection or credentials." -ForegroundColor Red
}
