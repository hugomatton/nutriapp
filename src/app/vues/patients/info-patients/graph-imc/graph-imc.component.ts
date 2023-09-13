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
              const imc = item.poids / (item.taille/100) ** 2;
              return imc;
            }
          );

          this.data = {
            labels: listeDates,
            datasets: [
              {
                label: 'IMC',
                data: listeIMC,
                fill: false,
                borderColor: '#083B32',
                tension: 0.2,
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
      aspectRatio: 0.8,
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
