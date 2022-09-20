import React, {useState}  from 'react';
import {IonInput, IonItemDivider, IonCol, IonGrid, IonRow, IonButtons, IonButton, IonContent, IonHeader,  IonIcon,  IonMenu,  IonMenuButton,  IonPage,  IonTitle,  IonToolbar, IonLabel, IonImg, IonItem, IonThumbnail, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonText} from '@ionic/react';
import { pricetags, chatbubbles, home, help, call, logoInstagram, send } from 'ionicons/icons';
import './Tab3.css';

function Tab3() {
  type Item = {
    src: string;
    text: string;
  };
  const logo: Item[] = [{ src: 'https://static.wixstatic.com/media/22a21d_9ec2ec9c3a71479db9f72bfe470c7920~mv2.png/v1/fill/w_286,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20com%20escrita.png', text: 'logo' }];
  const trave: Item[] = [{ src: 'https://static.wixstatic.com/media/22a21d_d5e699d252d5465dab2338a3b4067db9~mv2.png/v1/fill/w_438,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5viyk68zkj8h4b8enmbm.png', text: 'trave'}];
  const infoTrave: Item[] = [{ src: 'https://static.wixstatic.com/media/22a21d_94fffea4ce9f40ee983f1ea2728d0a2e~mv2.png/v1/crop/x_65,y_39,w_438,h_262/fill/w_462,h_275,al_c,lg_1,q_85,enc_auto/Captura%20de%20tela%202022-06-29%20151553%20trave_edited.png', text: 'infoTrave'}];
  const canivete: Item[] = [{ src: 'https://static.wixstatic.com/media/22a21d_b7d2372b4c3a4b09b5ef08ca937ad3cd~mv2.png/v1/fill/w_438,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5viyk68zkj8h4b8enmbm.png', text: 'canivete'}];
  const infoCanivete: Item[] = [{ src: 'https://static.wixstatic.com/media/22a21d_a76fb78ae8e04a98819bb3de2b4127c3~mv2.png/v1/crop/x_0,y_25,w_620,h_338/fill/w_487,h_265,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Captura%20de%20tela%202022-06-29%20150916_edited.png', text: 'infoCanivete'}];
  let [text, setName] = useState<string>();
  let [text2, setEmail] = useState<string>();
  let [number, setPhone] = useState<number>();
  return (

    
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="dark"></IonToolbar>
        </IonHeader>
          <IonContent>
            <IonList>
              {logo.map((image, i) => (
              <IonItem key={i}>          
                <IonImg src={image.src} />         
              </IonItem>
              ))}
            </IonList>
            <IonButton expand="block" color="warning" href='Tab1'>
              <IonIcon slot="start" icon={home}></IonIcon>
              Início
            </IonButton>
            <IonButton expand="block" color="warning" href='Tab2'>
              <IonIcon slot="start" icon={pricetags}></IonIcon>
              Produtos
            </IonButton>
            <IonButton expand="block" color="warning" href='Tab3'>                  
              <IonIcon slot="start" icon={chatbubbles}></IonIcon>
            Contato
            </IonButton>
          </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar color="dark">
            <IonButtons>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent color="medium">
            <IonList>
             {logo.map((image, i) => (
             <IonItem key={i}>          
               <IonImg src={image.src} />         
             </IonItem>
              ))}
            </IonList>           
              <IonToolbar color="dark">
                <IonTitle color="light">FALE CONOSCO</IonTitle>
                </IonToolbar>
                <IonContent color="medium">
                <IonButton expand="block" color="warning" href='https://api.whatsapp.com/send?phone=554391085725&text=Ol%c3%a1%2c+tudo+bem%3f+Gostaria+de+saber+mais+informa%c3%a7%c3%b5es+sobre+os+produtos+da+ING+Guindastes'>
                    <IonIcon slot="start" icon={call}></IonIcon>
                      (43) 9 9998-5724
                  </IonButton>
                  <IonButton expand="block" color="warning" href='https://www.instagram.com/grupoagmaq/'>
                    <IonIcon slot="start" icon={logoInstagram}></IonIcon>
                      @grupoagmaq
                  </IonButton>
                  <IonItem>
                    <IonInput value={text} placeholder="Nome Completo" onIonChange={e => setName(e.detail.value!)}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput value={text2} placeholder="E-mail" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput type="number" value={number} placeholder="Telefone" onIonChange={e => setPhone(parseInt(e.detail.value!, 10))}></IonInput>
                  </IonItem>
                  <IonButton expand="block" color="warning" href='mailto:gabrieljardinette@edu.unifil.br'>
                    <IonIcon slot="end" icon={send}></IonIcon>
                      ENVIAR E-MAIL
                  </IonButton>
                </IonContent>              
           </IonContent>
      </IonPage>
    </>
  );
}
export default Tab3;
