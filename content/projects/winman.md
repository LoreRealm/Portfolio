+++
title = "Winman"
description = "A lightweight command line tool for getting manual pages for Windows PowerShell commands"
date = 2026-03-04

[extra]
image = "winman.png"
tags = ["Rust", "CLI", "Powershell", "Software Development"]
github = "https://github.com/LoreRealm/Winman"
demo = "https://github.com/LoreRealm/Winman"
+++

## Overview
A Windows manual page like linux's man command. Built with Rust.
<div class="section-spacing">

## Features
- PowerShell command management
- Manual page generation for powershell commands
- Easy-to-use command-line interface
<div class="section-spacing">

## Tech Stack

- Rust
- WiX Toolset v3
- powershell
<div class="section-spacing">

## Challenges
Integrating commands.json within the WiX Toolset v3 environment presented a unique challenge in asset management. I had to develop a reliable method for the MSI installer to include this critical JSON configuration, maintaining file integrity and ensuring the correct installation paths were established for the Winman rewrite to function immediately out of the box.
During the development process, I initially explored using an MSIX installer to take advantage of modern containerization. However, I encountered significant blockers with SignTool and certificate validation that impeded the automated build pipeline. To prioritize a stable, distributable release, I pivoted back to WiX v3, successfully troubleshooting the XML schema requirements to ensure all dependencies were correctly bundled.
<div class="section-spacing">

**[View on GitHub](https://github.com/LoreRealm/Winman)** 
<div class="section-spacing">


## Screenshots
![Winman](/winman-cli.png)
![Winman-gif](/winman.gif)
