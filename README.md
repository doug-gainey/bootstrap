# Machine Bootstrap
Prerequisite: Windows Terminal

1. Install dev tools:

    ```
    winget install Microsoft.PowerShell
    winget install JanDeDobbeleer.OhMyPosh
    winget install Git.Git
    winget install Microsoft.VisualStudioCode
    winget install OpenJS.NodeJS.LTS
    ```

1. Install PowerShell modules:
    ```
    Install-Module PSReadLine -Force
    Install-Module Terminal-Icons
    Install-Module z
    ```

1. <a href="https://www.nerdfonts.com/" target="_blank">Install Nerd Fonts</a>:

    * CaskaydiaCove Nerd Font (Cascadia Code + icons)

    * JetBrainsMono Nerd Font

1. Copy <a href="machine-bootstrap/oh-my-posh/web.omp.json" target="_blank">Oh My Posh Theme</a> to /Users/{User}/.config/oh-my-posh

1. Copy <a href="machine-bootstrap/powershell/Microsoft.PowerShell_profile.ps1" target="_blank">Powershell Profile</a> to /Users/{User}/Documents/PowerShell

1. Copy <a href="machine-bootstrap/git/.gitconfig" target="_blank">Git Config</a> to /Users/{User}

1. Set defaults in Windows Terminal:

    Settings → Startup → Default profile → PowerShell

    Settings → Defaults → Appearance → Font face → CaskaydiaCove Nerd Font (or JetBrainsMono Nerd Font)

    Settings → Defaults → Appearance → Font size → 12


1. Set defaults in VS Code:

    Ctrl + Shift + P → Terminal: Select Default Profile → Powershell

    Ctrl + , → Terminal > Integrated: Font Family → CaskaydiaCove NF (or JetBrainsMono NF)

    Ctrl + , → Terminal > Integrated: Font Size → 12
1. Optional: Install global npm tools

    ```
    npm install -g pnpm
    npm install -g serve
    ```


# Project Bootstrap
Standard configs, templates, and helpers to quickly bootstrap personal projects.