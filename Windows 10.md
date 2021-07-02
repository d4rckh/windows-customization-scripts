# Windows 10

Windows 10 customization scripts.

## Index


[explorer](#explorer)
 - [Show all tray icons](#show-all-tray-icons)
 - [Disable Bing search](#disable-bing-search)


[privacy](#privacy)
 - [Disable Telemetry](#disable-telemetry)
 - [Disable Location Tracking](#disable-location-tracking)




# explorer



## Show all tray icons



```powershell
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer" -Name "EnableAutoTray"
```

<details>
    <summary>Revert script</summary>

    
```powershell
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer" -Name "EnableAutoTray"
```
    
</details>  


## Disable Bing search



```powershell
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Search" -Name "BingSearchEnabled"
```

<details>
    <summary>Revert script</summary>

    
```powershell
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Search" -Name "BingSearchEnabled"
```
    
</details>  




# privacy



## Disable Telemetry



```powershell
Remove-ItemProperty -Path "HKLM:\Software\Policies\Microsoft\Windows\DataCollection" -Name "AllowTelemetry"
```

<details>
    <summary>Revert script</summary>

    
```powershell
Remove-ItemProperty -Path "HKLM:\Software\Policies\Microsoft\Windows\DataCollection" -Name "AllowTelemetry"
```
    
</details>  


## Disable Location Tracking



```powershell
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Sensor\Overrides\{BFA794E4-F964-4FDB-90F6-51056BFE4B44}" -Name "SensorPermissionState" -Type DWord -Value 1
Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Services\lfsvc\Service\Configuration" -Name "Status" -Type DWord -Value 1

```

<details>
    <summary>Revert script</summary>

    
```powershell
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Sensor\Overrides\{BFA794E4-F964-4FDB-90F6-51056BFE4B44}" -Name "SensorPermissionState" -Type DWord -Value 1
Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Services\lfsvc\Service\Configuration" -Name "Status" -Type DWord -Value 1

```
    
</details>  




