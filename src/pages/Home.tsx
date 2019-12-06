import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import { useCamera, availableFeatures } from '@ionic/react-hooks/camera';
import { CameraResultType } from '@capacitor/core'

const Home: React.FC = () => {
  const { photo, getPhoto} = useCamera();

  const handleTakePhoto = () => {
      if(availableFeatures.getPhoto) {
        getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: CameraResultType.DataUrl
        })
      }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {availableFeatures.getPhoto ? (
          <div>
            <div><IonButton onClick={handleTakePhoto}>Take Photo</IonButton></div>
            <div>{photo && <img alt="" src={photo.dataUrl} />}</div>
          </div>
        ) : <div>Camera not available on this platform</div>}
      </IonContent>
    </IonPage>
  );
};

export default Home;
