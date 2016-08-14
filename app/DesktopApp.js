/**
 * Created by phy on 2016/8/11.
 */
Ext.define('PhyDesktop.DesktopApp',{
    extend: 'PhyDesktop.desktop.App',
    requires : [],
    init : function(){
        if( Ext.isIE){
            Ext.enbaleGarbageCollector =false;
        }
        this.callParent();
        this.desktop.initShortcut();
        //this.desktop.autorun();
    },
    getModules : function(){
        return GetWinMenu(this);
    },
    getDesktopConfig: function(){
        var wallpaper = Ext.util.Cookies.get("Wallpaper");
        var defaultWallpaper = "/resources/img/wallpapers/Blue-Sencha.jpg";
        if (wallpaper != null) {
            defaultWallpaper = wallpaper
        }
        var me = this,
            app = me.callParent();

        return Ext.apply(app,{
            contextMenuItems: [{
                text: "桌面背景",
                iconCls: "settings",
                handler: me.onSettings,
                scope: me
            }, {
                    text: "桌面主题",
                    iconCls: "gnome-settings-theme",
                    handler: me.onSetthemes,
                    scope: me
            }],
            shortcuts: Ext.create('Ext.data.Store',{
                model: "PhyDesktop.desktop.ShortcutModel",
                data: [
                    PhyDesktop.Config.apps.fm,
                    PhyDesktop.Config.apps.bing,
                    PhyDesktop.Config.apps.rtc,
                    PhyDesktop.Config.apps.ovirt
                ]
            }),
            wallpaper: defaultWallpaper,
            wallpaperStretch: true
        })
    },
    getStartConfig: function(){
        var me = this, app = me.callParent();
        return Ext.apply(app, {
            title: "导航栏",
            iconCls: "user",
            height: 300,
            toolConfig: {
                width: 110,
                items: [
                    {
                        text: "用户登录",
                        iconCls: "user",
                        handler: me.onLogin,
                        scope: me
                    }, {
                        text: "用户注册",
                        iconCls: "icon-user",
                        handler: this.onReguser,
                        scope: this
                    }, {
                        text: "修改密码",
                        iconCls: "key",
                        handler: this.onChangePwd,
                        scope: this
                    }, "-", {
                        text: "桌面背景",
                        iconCls: "settings",
                        handler: me.onSettings,
                        scope: me
                    }, {
                        text: "桌面主题",
                        iconCls: "gnome-settings-theme",
                        handler: me.onSetthemes,
                        scope: me
                    }, "-", {
                        text: "刷新桌面",
                        iconCls: "mymac",
                        handler: this.onreload,
                        scope: this
                    }, {
                        text: "注销登录",
                        iconCls: "gnome-keyring-manager",
                        handler: this.onlogOut,
                        scope: this
                    }, {
                        text: "退出系统",
                        iconCls: "logout",
                        handler: me.onExit,
                        scope: me
                    }, "-", {
                        text: "Ipad视窗",
                        iconCls: "ipad16",
                        handler: me.onIpad,
                        scope: me
                    }]
            }
        })

    },
    getTaskbarConfig: function(){

        var B = this.callParent();
        return Ext.apply(B, {
            quickStart: [{
                name: "显示桌面", iconCls: "mymac", handler: function () {
                    this.app.getDesktop().showDesktop()
                }
            },  {
                name: "关闭所有窗口", iconCls: "icon_padlock", handler: function () {
                    this.app.getDesktop().closeAllWindows()
                }
            }], trayItems: [{xtype: "trayclock", flex: 1}]
        })

    },
    onreload: function(){
        alert('onreload');
    },
    onIpad : function(){
        alert('onIpad');
    },
    onlogOut: function(){
        alert('onlogOut')
    },
    onExit: function(){
        alert('onExit');
    },
    onChangePwd: function(){
        alert('onChangePwd');
    },
    onReguser: function(){
        alert('onReguser');
    },
    onLogin : function(){
        alert('onLogin');

    },
    onSettings: function(){
        alert('onSettings');
    },
    onSetthemes: function(){
        alert('onSetthemes');
    }





});

function GetWinMenu (app){
    var appList = [];
    //Ext.each(PhyDesktop.Config.apps,function(){
    //
    //});



    alert('GetWinMenu');

    console.log(app);
    appList.push(new PhyDesktop.phy.SystemStatus());
    return appList;
}