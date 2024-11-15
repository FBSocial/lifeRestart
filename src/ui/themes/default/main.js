export default class Main extends ui.view.DefaultTheme.MainUI {
    constructor() {
        super();
        this.btnRemake.on(Laya.Event.CLICK, this, ()=>$ui.switchView(UI.pages.MODE));
        this.btnAchievement.on(Laya.Event.CLICK, this, ()=>$ui.switchView(UI.pages.ACHIEVEMENT));
        this.btnThanks.on(Laya.Event.CLICK, this, ()=>$ui.switchView(UI.pages.THANKS));
        this.btnGithub.on(Laya.Event.CLICK, this, goto, ['github']);
        this.btnDiscord.on(Laya.Event.CLICK, this, goto, ['discord']);
        this.btnThemes.on(Laya.Event.CLICK, this, ()=>$ui.showDialog(UI.pages.THEMES));
        this.btnSaveLoad.on(Laya.Event.CLICK, this, ()=>$ui.showDialog(UI.pages.SAVELOAD));
    }

    static load() {
        return [
            "images/atlas/images/icons.atlas",
        ]
    }

    init() {
        this.btnDiscord.visible = false;
        this.btnAchievement.visible = true;
        this.btnThanks.visible = false;
        this.btnGithub.visible = false;
        this.btnSaveLoad.visible = false;
        const text = this.labSubTitle.text;
        this.labSubTitle.text = ' ';
        this.labSubTitle.text = text;
    }
}