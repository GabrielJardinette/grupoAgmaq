import React from 'react';
import {IonCol, IonGrid, IonRow, IonButtons, IonButton, IonContent, IonHeader,  IonIcon,  IonMenu,  IonMenuButton,  IonPage,  IonTitle,  IonToolbar, IonLabel, IonImg, IonItem, IonThumbnail, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonText} from '@ionic/react';
import { pricetags, chatbubbles, home, help } from 'ionicons/icons';
import './Tab1.css';

function Tab1() {
  type Item = {
    src: string;
    text: string;
  };
  const logo: Item[] = [{ src: 'https://static.wixstatic.com/media/22a21d_9ec2ec9c3a71479db9f72bfe470c7920~mv2.png/v1/fill/w_286,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20com%20escrita.png', text: 'logo' }];
  const imagem1: Item[] = [{ src: 'https://static.wixstatic.com/media/22a21d_774c6907717b4020968e1dd13faeef6b~mv2.jpg/v1/fill/w_1903,h_656,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/22a21d_774c6907717b4020968e1dd13faeef6b~mv2.jpg', text: 'imagem1'}];
  const logoIng: Item[] = [{ src: 'https://static.wixstatic.com/media/22a21d_961866b64ef54b04bbbe672197241513~mv2.png/v1/fill/w_396,h_179,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20ING_edited.png', text: 'logoIng'}];
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
              {imagem1.map((image, i) => (                        
                <IonImg  src={image.src} />         
                ))}                 
            <IonCard color="medium">
              <IonCardHeader>
                  <IonCardContent id='logoING'>
                    {logoIng.map((image, i) => (                        
                      <IonImg src={image.src} />         
                    ))} 
                  </IonCardContent>
              </IonCardHeader>
              <IonCardContent>
                Nossos guindastes são produzidos com rígidos controles de qualidade nos processos e testes de carga e
                resistência, atendendo a norma NR12, e sendo supervisionados pelos próprios diretores e gerentes da empresa.        
                <IonButton size="small" color="warning" href='Tab2'>
                  DETALHES
                </IonButton>
              </IonCardContent>
            </IonCard>
            <IonCard color="medium">
              <IonCardHeader>
                  <IonCardTitle>SOBRE NÓS</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
              Atuando no mercado de guindastes e empilhadeiras no Norte e Noroeste do Paraná e Sul do Mato Grosso do Sul. 
              O Grupo AGMAQ tem como objetivo atender às necessidades e desejos de nossos clientes garantindo qualidade na movimentação e
              elevação de cargas, contando com oficinas credenciadas na área de abrangência atendida, buscando a otimização na entrega e deslocamento do cliente.    
              </IonCardContent>
            </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
}
export default Tab1;