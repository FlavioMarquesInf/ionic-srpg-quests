import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss'],
})
export class QuestsComponent implements OnInit {

  isModalOpen = false;

  quests = [
    {
      questName: 'Implementar a funcionalidade Quests no SRPG',
      comment: 'Vai ficar massa!',
      date: '2022-08-31T03:00:00.000Z',
      isCompleted: true,
      percentage: 70,
      urgency: 3,
      importance: 8,
      value: 3,
      need: 7,
      impact: 10,
      effort: 8,
      isUrgent: false,
      isImportant: false,
      hasValue: true,
      itIsNecessary: false,
      bringsImpact: false,
      requiresEffort: false,
      id: 2
    },
    {
      questName: 'Refatorar componente chart',
      comment: 'Já está ficando enorme, preciso refatorar',
      date: '2022-08-31T03:00:00.000Z',
      isCompleted: false,
      percentage: 64,
      urgency: 6,
      importance: 9,
      value: 10,
      need: 10,
      impact: 10,
      effort: 4,
      isUrgent: false,
      isImportant: false,
      hasValue: false,
      itIsNecessary: false,
      bringsImpact: false,
      requiresEffort: false,
      id: 3
    }
  ];

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Quest',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}

