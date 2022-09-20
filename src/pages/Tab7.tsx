import React, {useState}  from 'react';
import {IonInput, IonItemDivider, IonCol, IonGrid, IonRow, IonButtons, IonButton, IonContent, IonHeader,  IonIcon,  IonMenu,  IonMenuButton,  IonPage,  IonTitle,  IonToolbar, IonLabel, IonImg, IonItem, IonThumbnail, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonText} from '@ionic/react';
import { pricetags, chatbubbles, home, help, call, logoInstagram, send, card } from 'ionicons/icons';
import './Tab7.css';

function Tab7() {
  type Item = {
    src: string;
    text: string;
  };
  const logo: Item[] = [{ src: 'https://static.wixstatic.com/media/22a21d_9ec2ec9c3a71479db9f72bfe470c7920~mv2.png/v1/fill/w_286,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20com%20escrita.png', text: 'logo' }];
  const trave: Item[] = [{ src: 'https://static.wixstatic.com/media/22a21d_d5e699d252d5465dab2338a3b4067db9~mv2.png/v1/fill/w_438,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5viyk68zkj8h4b8enmbm.png', text: 'trave'}];
  const tabelaTrave: Item[] = [{ src: 'https://static.wixstatic.com/media/22a21d_4c8f42d9b5d642268c27f01046c44bc8~mv2.jpeg/v1/fill/w_427,h_440,al_c,q_80,enc_auto/WhatsApp%20Image%202022-09-20%20at%2015_57_44.jpeg', text: 'tabelaTrave'}];
  const canivete: Item[] = [{ src: 'https://static.wixstatic.com/media/22a21d_b7d2372b4c3a4b09b5ef08ca937ad3cd~mv2.png/v1/fill/w_438,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5viyk68zkj8h4b8enmbm.png', text: 'canivete'}];
  const tabelaCanivete: Item[] = [{ src: 'https://static.wixstatic.com/media/22a21d_6b25bd4921ec4892859cbd85b2759ee0~mv2.jpeg/v1/fill/w_444,h_441,al_c,q_80,enc_auto/WhatsApp%20Image%202022-09-20%20at%2015_53_56.jpeg', text: 'tabelaCanivete'}];
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
                <IonTitle color="light">COMPRA</IonTitle>
                </IonToolbar>
                      <IonCard>
                        <IonCardTitle>Confira sua compra</IonCardTitle>
                        <IonCardContent>
                            <IonList>
                                <IonItem>
                                    <IonLabel>ING 52.500 TRAVE</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>LANÇAS - 6H/3M</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>ALCANCE - 25,1 m</IonLabel>
                                </IonItem>
                                <IonItem>
                                    <IonLabel>VALOR - R$ 366.500.00</IonLabel>
                                </IonItem>
                            </IonList>
                            <IonButton expand="block" color="warning" href='Tab9'>
              <IonIcon slot="start" icon={card}></IonIcon>
              FINALIZAR
            </IonButton>   
                        </IonCardContent>
                      </IonCard>             
        </IonContent>
      </IonPage>
    </>
  );
}
export default Tab7;