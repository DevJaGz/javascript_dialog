
class ConfirmDialog {

    defaultKey = "DOMConfirmDialog"
    constructor() {
        this.DOMConfirmDialog = null;
    }

    confirm(params) {
        this.DOMConfirmDialog = this.getDOMElementToUse(params.key);
        this.createDOMElements(params);
        this.show();
    }

    getDOMElementToUse(key) {
        return (key) ? document.getElementById(key) : document.getElementById(this.defaultKey);
    }

    createDOMElements(params) {
        let headerHTML = document.createElement('header');
        let mainHTML = document.createElement('main');
        let footerHTML = document.createElement('footer');
        let hr = document.createElement('hr')
        this.createDOMHeader(headerHTML, params);
        this.DOMConfirmDialog.appendChild(headerHTML);
        this.DOMConfirmDialog.appendChild(hr);
    }

    createDOMHeader(headerHTML, params) {
        headerHTML.innerHTML = `
            <div>${params.header}</div>
        `
        const closeBtn = document.createElement('button');
        closeBtn.onclick = this.close.bind(this);
        closeBtn.innerHTML = "X";
        headerHTML.appendChild(closeBtn);
        headerHTML.classList.add('confirm-dialog-header')
    }

    show() {
        this.DOMConfirmDialog.classList.add('confirm-dialog-active');
    }

    close(event) {
        this.DOMConfirmDialog.classList.remove('confirm-dialog-active');
        this.DOMConfirmDialog.innerHTML = "";
    }
}
const confirmDialog = new ConfirmDialog();





const showDialogBtn = document.getElementById('showDialogBtn');

showDialogBtn.onclick = () => {
    confirmDialog.confirm({
        header: "Confirmación",
        icon: "",
        message: "¿Esta seguro?",
        acceptLabel: "Si",
        rejectLabel: "No",
        accept: () => {
            console.log("Accepted!");
        },
        reject: () => {
            console.log("Rejected!");
        }
    });

}



