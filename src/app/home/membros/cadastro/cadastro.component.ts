import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Membro } from 'src/app/shared/membro';
import { MembroService } from 'src/app/services/membro.service';
import { FotoService } from 'src/app/services/foto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroMembroComponent implements OnInit {

  formMembro: FormGroup;
  file;

  constructor(
    private fb: FormBuilder,
    private membroService: MembroService,
    private fotoService: FotoService) {

    }

  ngOnInit() {
    this.formMembro = this.fb.group({
      nome: ['', [Validators.required]],
      foto: ['']
    });
  }

  onSubmit() {
    if (this.formMembro.valid) {
      const membro = new Membro();
      membro.nome = this.formMembro.get('nome').value;
      console.log(this.formMembro.value);
      this.fotoService.upload(this.file);
      //this.membroService.insert(membro);
    }
  }

  handleFileInput(event) {
    this.file = event.target.files[0];
  }

}
