//images
export const pebaLogoNavbar = require('../static/images/peba_logo_navbar.png');
export const header_bg = require('../static/images/header_bg.png');
export const thcLogo = require('../static/images/teresinahc.png');
export const gnLogo = require('../static/images/gonuvem.png');
export const faceIcon = require('../static/images/face-icon.svg');
export const instaIcon = require('../static/images/insta-icon.svg');
export const githubLogo = require('../static/images/github-logo.svg');
export const searchIcon = require('../static/images/search.svg');
export const pebaLogo = require('../static/images/peba_logo.png');
export const nextIcon = require('../static/images/Next.svg');
export const previousIcon = require('../static/images/Previous.svg');
export const informationIcon = require('../static/images/information-button.svg');
export const map = require('../static/images/Brazil_Map.svg');
export const emailIcon = require('../static/images/Email_Icon.svg');
export const greenChair = require('../static/images/chair_green.svg');
export const yellowChair = require('../static/images/chair_yellow.svg');
export const redChair = require('../static/images/chair_red.svg');


//header links
export const headerLinks = [
    {
        name: 'Início',
        href: '/index',
        as: '/'
    },
    {
        name: 'Sobre o Projeto',
        href: '/index#about',
        as: '/#about'
    },
    {
        name: 'Escolha por Estado',
        href: '/index#map',
        as: '/#map'
    },
    {
        name: 'Dicionário',
        href: '/index',
        as: '/'
    },
];

//states from map
export const states = [
    {fullName: 'Rondônia', abbreviation: 'RD'},
    {fullName: 'Acre', abbreviation: 'AC'},
    {fullName: 'Amazonas', abbreviation: 'AM'},
    {fullName: 'Roraima', abbreviation: 'RO'},
    {fullName: 'Amapá', abbreviation: 'AP'},
    {fullName: 'Tocantins', abbreviation: 'TO'},
    {fullName: 'Mato Grosso', abbreviation: 'MT'},
    {fullName: 'Goiás', abbreviation: 'GO'},
    {fullName: 'Mato Grosso do Sul', abbreviation: 'MS'},
    {fullName: 'Minas Gerais', abbreviation: 'MG'},
    {fullName: 'Paraná', abbreviation: 'PR'},
    {fullName: 'Rio Grande do Sul', abbreviation: 'RS'},
    {fullName: 'Bahia', abbreviation: 'BA'},
    {fullName: 'Piauí', abbreviation: 'PI'},
    {fullName: 'Ceará', abbreviation: 'CE'},
    {fullName: 'Rio Grande do Norte', abbreviation: 'RN'},
    {fullName: 'Alagoas', abbreviation: 'AL'},
    {fullName: 'Sergipe', abbreviation: 'SE'},
    {fullName: 'Distrito Federal', abbreviation: 'DF'},
    {fullName: 'Pernambuco', abbreviation: 'PE'},
    {fullName: 'Maranhão', abbreviation: 'MA'},
    {fullName: 'Pará', abbreviation: 'PA'},
    {fullName: 'São Paulo', abbreviation: 'SP'},
    {fullName: 'Rio de Janeiro', abbreviation: 'RJ'},
    {fullName: 'Espírito Santo', abbreviation: 'ES'},
    {fullName: 'Santa Catarina', abbreviation: 'SC'},
    {fullName: 'Paraíba', abbreviation: 'PB'},
];


//functions

export const formatDate = date => (
    `${formatNumber(date.getDate())}/${date.getMonth() + 1}/${date.getFullYear()}`
);

const formatNumber = number => (
    number < 10 ? `0${number}` : `${number}`
);

export const toMoney = money => (
    `R$ ${money.toLocaleString('pt-BR', {maximumFractionDigits: 2, minimumFractionDigits: 2})}`
);