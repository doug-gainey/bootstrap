# Machine Bootstrap
Prerequisite: Windows Terminal

1. Install dev tools:

    ```
    winget install Microsoft.PowerShell
    winget install JanDeDobbeleer.OhMyPosh
    winget install Git.Git
    winget install Microsoft.VisualStudioCode
    winget install CoreyButler.NVMforWindows

    ```

1. Install PowerShell modules:
    ```
    Install-Module PSReadLine -Force
    Install-Module Terminal-Icons
    Install-Module z
    Install-Module posh-git
    ```

1. [Install Nerd Fonts](https://www.nerdfonts.com/):

    * CaskaydiaCove Nerd Font (Cascadia Code + icons)

    * JetBrainsMono Nerd Font

1. Copy [Oh My Posh Theme](machine-bootstrap/oh-my-posh/web.omp.json) to /Users/{User}/.config/oh-my-posh

1. Copy [Powershell Profile](machine-bootstrap/powershell/Microsoft.PowerShell_profile.ps1) to /Users/{User}/Documents/PowerShell

1. Copy [Git Config](machine-bootstrap/git/.gitconfig) to /Users/{User}

1. Set defaults in Windows Terminal:

    Settings → Startup → Default profile → PowerShell

    Settings → Defaults → Appearance → Font face → CaskaydiaCove Nerd Font (or JetBrainsMono Nerd Font)

    Settings → Defaults → Appearance → Font size → 12


1. Set defaults in VS Code:

    Ctrl + Shift + P → Terminal: Select Default Profile → Powershell

    Ctrl + , → Terminal > Integrated: Font Family → CaskaydiaCove NF (or JetBrainsMono NF)

    Ctrl + , → Terminal > Integrated: Font Size → 12
1. Install node versions
    ```
    nvm install lts
    nvm install 22
    nvm install 20
    nvm use lts
    ```
1. Optional: Install global npm tools

    ```
    npm install -g pnpm
    npm install -g serve
    ```


# Project Bootstrap
Standard configs, templates, and helpers to quickly bootstrap personal projects.
