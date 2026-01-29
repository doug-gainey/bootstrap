# ---------- Core UX ----------
Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -PredictionViewStyle ListView
Set-PSReadLineOption -EditMode Windows

# ---------- Posh Git ----------
if (Get-Module -ListAvailable posh-git) {
    Import-Module posh-git
}

# ---------- Oh My Posh ----------
if (Get-Command oh-my-posh -ErrorAction SilentlyContinue) {
    oh-my-posh init pwsh --config "$HOME\.config\oh-my-posh\web.omp.json" | Invoke-Expression
}

# ---------- Icons ----------
if (Get-Module -ListAvailable Terminal-Icons) {
    Import-Module Terminal-Icons
}

# ---------- Navigation ----------
if (Get-Module -ListAvailable z) {
    Import-Module z
}

# ---------- Dev Aliases ----------
Set-Alias g git
Set-Alias v code
Set-Alias n npm
Set-Alias pn pnpm

# ---------- Safety ----------
Set-PSReadLineKeyHandler -Key Ctrl+c -Function Copy
