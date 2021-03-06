import { html, LitElement } from 'lit-element';
import style from './ib-subaccount-table-styles.js';
import '@polymer/paper-dialog';
import '@vaadin/vaadin-icons';
import '@catsys/ib-subaccount-edit';
import '@catsys/ib-subaccount-register';

class IbSubaccountTable extends LitElement {
  static get properties() {
    return {
      subaccountList: {type: Array},
      editObject:{type: Object}
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.subaccountList = [];
    this.editObject = {};
  }

  render() {
    return html`

          <paper-dialog id="dialog-edit" modal no-cancel-on-outside-click="false">

                  <div class="sub-account-edit">
                      <ib-subaccount-edit .subaccountDataEdit="${this.editObject}" @subaccount-edit="${this.editSubaccount}"></sub-account-edit>

                  </div>

          </paper-dialog>

          <paper-dialog id="dialog" modal no-cancel-on-outside-click="false">
                  <div class="sub-account-register">
                      <ib-subaccount-register @subaccount-register="${this.insertTable}" ></sub-account-register>

                  </div>
          </paper-dialog>

          <div class="sub-account-table">
              <table>
                  <thead>
                      <th id="subaccount">#Subcuenta</th>
                      <th id="name">Nombre</th>
                      <th id="status">Estatus</th>
                      <th id="actions">Acciones</th>
                  </thead>
                  <tbody>
                      ${this.subaccountList.map((entry, index) => html`
                          <tr >
                              <td>${entry.noSubcuenta}</td>
                              <td>${entry.name}</td>
                              <td>${entry.estatus === 'true'? html`<iron-icon src="/assets/activo.png"></iron-icon>` : html`<iron-icon icon="vaadin:close-circle-o"></iron-icon>`}</td>
                              <td><a id=${entry.id} @click="${this.openDialogEdit}"><iron-icon src="/assets/editar.png"></iron-icon></a></td>

                          </tr>`
                      )}
                  </tbody>
              </table>

          <button @click="${this.openDialog}">Agregar</button>
      `;
  }

    insertTable(event){
      this.dispatchEvent(new CustomEvent('register-subaccount', {
        detail: event.detail
      }))

  }

  editSubaccount(event){
    this.dispatchEvent(new CustomEvent('edit-subaccount',{
      detail: {
        editedObject: this.editObject,
        newData: event.detail
      }
    }))
    this.requestUpdate();
  }

  openDialog(event) {
    this.shadowRoot.querySelector('#dialog').open();

  }
  openDialogEdit(event){
    this.shadowRoot.querySelector('#dialog-edit').open()
    const index = this.subaccountList.map(entry => entry.id).indexOf(event.currentTarget.id)
    this.editObject = this.subaccountList[index]
    this.requestUpdate();
    }

}

window.customElements.define("ib-subaccount-table", IbSubaccountTable);
