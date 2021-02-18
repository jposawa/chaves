import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import '../estilos.css';

export default function Inicio(){
  const config = {
    fb:{
      apiKey: "AIzaSyAV_lwcm3QSSKPfCri3qHVi50bxG7_3qc8",
      authDomain: "chaves-7cabe.firebaseapp.com",
      projectId: "chaves-7cabe",
      storageBucket: "chaves-7cabe.appspot.com",
      messagingSenderId: "661721104187",
      appId: "1:661721104187:web:dc2601b74e93fe93ad011e",
      measurementId: "G-F2CWK594EF",
    },
    enderecos:{
      usuario: "/usuario/",
      chave:"/chave/",
    },
    prefixo:"chaves@",
  };
  let fbAuth, fbDB;

  try{
    firebase.initializeApp(config.fb);
    fbAuth = firebase.auth();
    fbDB = firebase.database();
  }catch(erro) {
    if(!/already exists/.test(erro.message))
    {
      console.error("Deu ruim!", erro.stack);
    }
  }

  const salvaChave = (dadosChave) =>{
    if(dadosChave)
    {
      
    }
  }
  /* const uuid = {
    v1: require('uuid/v1'),
    v4: require('uuid/v4'),
  }; */

  return(
    <div className="corpoSite"></div>
  )
}