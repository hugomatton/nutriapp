import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { ObservationService } from 'src/app/services/observations.service';

@Component({
  selector: 'app-graph-imc',
  templateUrl: './graph-imc.component.html',
  styleUrls: ['./graph-imc.component.css'],
})
export class GraphImcComponent implements OnInit {
  data: any;
  options: any;

  constructor(
    private observationService: ObservationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      let idPatient = param['id'];
      this.observationService
        .getObservationsByPatientId(idPatient)
        .subscribe((res: any) => {
          const listeDates: string[] = res.map(
            (item: { date: string | number | Date }) => {
              const dateObj = new Date(item.date);
              const jour = dateObj.getDate();
              const mois = dateObj.getMonth() + 1; // Les mois commencent à 0 (janvier), donc on ajoute 1.
              const annee = dateObj.getFullYear();

              return `${jour}/${mois}/${annee}`;
            }
          );

          const listeIMC: number[] = res.map(
            (item: { taille: number; poids: number }) => {
              const imc = (item.poids / (item.taille / 100) ** 2).toFixed(1);
              return imc;
            }
          );

          let insuffisancePonderaleSevere: number[] = [];
          let insuffisancePonderale: number[] = [];
          let poidsNormal: number[] = [];
          let surpoids: number[] = [];
          let obesite1: number[] = [];
          let obesite2: number[] = [];
          let obesite3: number[] = [];

          for (let i = 0; i < listeIMC.length; i++) {
            insuffisancePonderaleSevere.push(16.5);
            insuffisancePonderale.push(18.5);
            poidsNormal.push(25);
            surpoids.push(30);
            obesite1.push(35);
            obesite2.push(40);
            obesite3.push(60);
          }

          this.data = {
            labels: listeDates,
            datasets: [
              {
                label: 'IMC Patient',
                data: listeIMC,
                fill: false,
                borderColor: '#083B32',
                tension: 0.2,
              },
              {
                label: 'Insuffisance Pondérale Sévère',
                data: insuffisancePonderaleSevere,
                fill: true,
                tension: 0.4,
                borderColor: '#4a7ab0',
                backgroundColor: '#4a7ab0',
                pointRadius: 0,
              },
              {
                label: 'Insuffisance Pondérale',
                data: insuffisancePonderale,
                fill: true,
                tension: 0.4,
                borderColor: '#48a5af',
                backgroundColor: '#48a5af',
                pointRadius: 0,
              },
              {
                label: 'Poids Normal',
                data: poidsNormal,
                fill: true,
                tension: 0.4,
                borderColor: '#47b592',
                backgroundColor: '#47b592',
                pointRadius: 0,
              },
              {
                label: 'Surpoids',
                data: surpoids,
                fill: true,
                tension: 0.4,
                borderColor: '#efc448',
                backgroundColor: '#efc448',
                pointRadius: 0,
              },
              {
                label: 'Obésité de grade 1',
                data: obesite1,
                fill: true,
                tension: 0.4,
                borderColor: '#ef7268',
                backgroundColor: '#ef7268',
                pointRadius: 0,
              },
              {
                label: 'Obésité de grade 2',
                data: obesite2,
                fill: true,
                tension: 0.4,
                borderColor: '#db594d',
                backgroundColor: '#db594d',
                pointRadius: 0,
              },
              {
                label: 'Obésité de grade 3',
                data: obesite3,
                fill: true,
                tension: 0.4,
                borderColor: '#bb4545',
                backgroundColor: '#bb4545',
                pointRadius: 0,
              },
            ],
          };

          console.log(res);
        });
    });

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.9,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }
}
