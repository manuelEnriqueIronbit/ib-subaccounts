import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }

table {
  border-spacing: 0;
  width: 100%; }
  table thead {
    background-image: linear-gradient(180deg, #00EFD1 0%, #00ACEA 100%);
    padding: 0;
    color: #ffffff; }
    table thead th {
      padding: 8px 17px; }
    table thead th:nth-child(1) {
      width: 110px;
      text-align: left;
      padding: 8px 0 8px 17px; }
    table thead th:nth-child(2) {
      width: 145px; }
    table thead th:nth-child(3) {
      width: 119px; }
    table thead th:nth-child(4) {
      width: 145px; }
  table tr:nth-child(even) {
    background-color: #DFDFDF; }
  table tbody tr td:nth-child(1) {
    text-align: left; }
  table tbody tr td {
    text-align: center;
    padding: 14px 17px; }
    table tbody tr td a {
      cursor: pointer; }

button {
  background-image: linear-gradient(180deg, #00EFD1 0%, #00ACEA 100%);
  border: 1.68px solid #00ACEA;
  border-radius: 11.76px;
  width: 102px;
  height: 25.2px;
  color: #ffffff;
  font-size: 16.24px;
  font-weight: 700;
  letter-spacing: 0.9px;
  line-height: 19px;
  text-align: center;
  margin-top: 45px;
  cursor: pointer; }

.sub-account-table {
  display: flex;
  align-items: center;
  flex-direction: column; }

paper-dialog {
  background-color: color-white;
  border-radius: 23.76px;
  box-shadow: 0 21px 62px 0 rgba(0, 0, 0, 0.1);
  width: 80vh;
  height: 245px;
  max-width: none; }
  paper-dialog vaadin-button {
    background-image: linear-gradient(43.3deg, #00EFD1 0%, #00ACEA 100%);
    border: 1.68px solid #00ACEA;
    border-radius: 11.76px;
    width: 102px;
    height: 25.2px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.9px;
    line-height: 19px;
    text-align: center;
    position: absolute;
    bottom: -14px;
    margin: 0;
    padding: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto; }
  paper-dialog h2 {
    margin-top: 22px;
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.46px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 44px; }
  paper-dialog div ib-subaccount-edit, paper-dialog div ib-subaccount-register {
    width: 100%; }
    paper-dialog div ib-subaccount-edit div, paper-dialog div ib-subaccount-register div {
      padding: 0 30px 15px; }
      paper-dialog div ib-subaccount-edit div label, paper-dialog div ib-subaccount-register div label {
        display: inline; }
      paper-dialog div ib-subaccount-edit div input, paper-dialog div ib-subaccount-edit div select, paper-dialog div ib-subaccount-register div input, paper-dialog div ib-subaccount-register div select {
        display: inline;
        background-color: #DFDFDF;
        border: 0.65px solid #DFDFDF;
        border-radius: 3px;
        height: 25px;
        width: 278px;
        padding: 0 8px; }
      paper-dialog div ib-subaccount-edit div #status, paper-dialog div ib-subaccount-register div #status {
        width: 138px; }

.sub-account-edit, .sub-account-register {
  margin: 0; }
`;
