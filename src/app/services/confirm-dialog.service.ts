import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  constructor(private confirmationService: ConfirmationService) {}

  public openConfirmDialog() {
    return this.confirmationService.confirm({
      // target: event.target as EventTarget,
      message: 'Estas seguro de realizar esta accion?',
      header: 'Confirmacion',
      closable: true,
      closeOnEscape: false,
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'danger',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Confirmar',
        severity:'info'
      },
    });
  }
}
