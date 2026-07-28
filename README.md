# Machine Bootstrap

## Windows setup

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
   - CaskaydiaCove Nerd Font (Cascadia Code + icons)
   - JetBrainsMono Nerd Font

1. Copy [Oh My Posh Theme](machine-bootstrap/oh-my-posh/web.omp.json) to /Users/{User}/.config/oh-my-posh

1. Copy [Powershell Profile](machine-bootstrap/powershell/Microsoft.PowerShell_profile.ps1) to /Users/{User}/Documents/PowerShell

1. Copy [Git Config](machine-bootstrap/git/.gitconfig.win) to /Users/{User}/.gitconfig on Windows

1. Set defaults in Windows Terminal:

   Settings → Startup → Default profile → PowerShell

   Settings → Defaults → Appearance → Font face → CaskaydiaCove Nerd Font (or JetBrainsMono Nerd Font)

   Settings → Defaults → Appearance → Font size → 12

1. Set defaults in VS Code:

   Ctrl + Shift + P → Terminal: Select Default Profile → Powershell

   Ctrl + , → Terminal > Integrated: Font Family → CaskaydiaCove NF (or JetBrainsMono NF)

   Ctrl + , → Terminal > Integrated: Font Size → 12

1. Install node versions:

   ```
   nvm install lts
   nvm install 22
   nvm install 20
   nvm use lts
   ```

1. Optional: Install global npm tools:

   ```
   npm install -g pnpm
   npm install -g serve
   ```

## Linux setup

Prerequisite: a Linux shell and distro package manager. If using WSL, this is a WSL distro shell while VS Code runs on Windows.

1. Install core dev tools:

   ```sh
   # Example for Ubuntu/Debian
   sudo apt update
   sudo apt install -y curl git zsh
   ```

   For other distros, install the equivalent packages for `curl`, `git`, and `zsh`.

1. Set `zsh` as your default shell:

   ```sh
   chsh -s "$(which zsh)"
   ```

   Then restart the terminal or re-open WSL.

1. Install Oh My Zsh:

   ```sh
   sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
   ```

   This creates `~/.oh-my-zsh` and updates `~/.zshrc`.

1. Install Starship prompt:

   ```sh
   curl -sS https://starship.rs/install.sh | sh
   ```

1. Configure `~/.zshrc` for Oh My Zsh and Starship:
   - Set the Oh My Zsh theme (for example):

     ```sh
     ZSH_THEME="agnoster"
     ```

   - Enable useful plugins:

     ```sh
     plugins=(git z zsh-autosuggestions zsh-syntax-highlighting)
     ```

   - Add Starship integration at the end of `~/.zshrc`:

     ```sh
     eval "$(starship init zsh)"
     ```

   - If you want a simpler Oh My Zsh theme, use `robbyrussell`, `bira`, or `powerlevel10k` instead.

1. Install optional shell helpers:

   ```sh
   sudo apt install -y fzf ripgrep
   ```

   `fzf` adds fuzzy file and history search, and `ripgrep` gives fast search on the command line.

1. Copy Git config:
   - Copy [Git Config](machine-bootstrap/git/.gitconfig.linux) to `~/.gitconfig`

1. Install node versions:

   ```sh
   nvm install lts
   nvm install 22
   nvm install 20
   nvm use lts
   ```

1. Optional: Install global npm tools:

   ```sh
   npm install -g pnpm
   npm install -g serve
   ```

# Project Bootstrap

Standard configs, templates, and helpers to quickly bootstrap personal projects.
