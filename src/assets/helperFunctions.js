export const prepareData = (state) => {
    let result = {ethernet: {}, wireless: {}};
    if (!state.IP['Ethernet_IP'].automaticallyIP) {
        result.ethernet = {...state.IP['Ethernet_IP']};
    } else {
        result.ethernet = {automaticallyIP: state.IP['Ethernet_IP'].automaticallyIP};
    }
    if (!state.DNS['Ethernet_DNS'].AutoDNS) {
        result.ethernet = {...result.ethernet, ...state.DNS['Ethernet_DNS']};
    } else {
        result.ethernet = {...result.ethernet, AutoDNS: state.DNS['Ethernet_DNS'].AutoDNS};
    }
    if (!state.NET.enableWifi) {
        result.wireless = {enableWifi: false};
    } else {
        result.wireless = {enableWifi: true, networkName: state.NET.networkName};
        if (!state.IP['Wireless_IP'].automaticallyIP) {
            result.wireless = {...result.wireless, ...state.IP['Wireless_IP']};
        } else {
            result.wireless = {...result.wireless, automaticallyIP: true};
        }
        if (!state.DNS['Wireless_DNS'].AutoDNS) {
            result.wireless = {...result.wireless, ...state.DNS['Wireless_DNS']};
        } else {
            result.wireless = {...result.wireless, AutoDNS: true};
        }
        if (!state.NET.enableWifiSecurity) {
            result.wireless = {...result.wireless, enableWifiSecurity: state.NET.enableWifiSecurity};
        } else {
            result.wireless = {...result.wireless, enableWifiSecurity: state.NET.enableWifiSecurity,
                securityKey: state.NET.securityKey};
        }
    }
    return result;

};