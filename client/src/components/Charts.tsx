import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { top10Agencies, dentsuProjections, type Agency } from '@/data/marketData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const chartColors = {
  primary: 'rgb(73, 93, 193)',
  secondary: 'rgb(107, 185, 240)',
  success: 'rgb(102, 187, 106)',
  warning: 'rgb(255, 167, 38)',
  danger: 'rgb(239, 83, 80)',
  muted: 'rgb(158, 158, 158)',
};

export function OperatingMarginChart() {
  const data = {
    labels: top10Agencies.map(a => a.name.replace(' Finland', '').replace('\\', '')),
    datasets: [
      {
        label: 'Operating Margin (%)',
        data: top10Agencies.map(a => a.operatingMargin),
        backgroundColor: top10Agencies.map(a => 
          a.name === 'Dentsu Finland' ? chartColors.warning :
          a.name === 'Tulos Helsinki' ? chartColors.success :
          chartColors.primary
        ),
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.parsed.y}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        }
      }
    },
  };

  return <Bar data={data} options={options} />;
}

export function GrossProfitChart() {
  const data = {
    labels: top10Agencies.map(a => a.name.replace(' Finland', '').replace('\\', '')),
    datasets: [
      {
        label: 'Gross Profit (€M)',
        data: top10Agencies.map(a => a.grossProfit),
        backgroundColor: top10Agencies.map(a => 
          a.name === 'Dentsu Finland' ? chartColors.warning :
          chartColors.secondary
        ),
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `€${context.parsed.x}M`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return '€' + value + 'M';
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        }
      },
      y: {
        grid: {
          display: false,
        }
      }
    },
  };

  return <Bar data={data} options={options} />;
}

export function EfficiencyChart() {
  const data = {
    labels: top10Agencies.map(a => a.name.replace(' Finland', '').replace('\\', '')),
    datasets: [
      {
        label: 'GP per Employee (€k)',
        data: top10Agencies.map(a => a.gpPerEmployee),
        backgroundColor: top10Agencies.map(a => 
          a.name === 'Tulos Helsinki' ? chartColors.success :
          a.name === 'Dentsu Finland' ? chartColors.warning :
          chartColors.muted
        ),
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `€${context.parsed.y}k per employee`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return '€' + value + 'k';
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        }
      }
    },
  };

  return <Bar data={data} options={options} />;
}

export function DentsuProjectionChart() {
  const data = {
    labels: ['Current (2024)', 'Year 1 Target', 'Year 2 Target'],
    datasets: [
      {
        label: 'Gross Profit (€M)',
        data: [
          dentsuProjections.current.grossProfit,
          dentsuProjections.year1.grossProfit,
          dentsuProjections.year2.grossProfit,
        ],
        borderColor: chartColors.secondary,
        backgroundColor: 'rgba(107, 185, 240, 0.1)',
        yAxisID: 'y',
        tension: 0.4,
      },
      {
        label: 'Operating Margin (%)',
        data: [
          dentsuProjections.current.operatingMargin,
          dentsuProjections.year1.operatingMargin,
          dentsuProjections.year2.operatingMargin,
        ],
        borderColor: chartColors.success,
        backgroundColor: 'rgba(102, 187, 106, 0.1)',
        yAxisID: 'y1',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Gross Profit (€M)',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        }
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Operating Margin (%)',
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value + '%';
          }
        }
      },
    },
  };

  return <Line data={data} options={options} />;
}

export function AgencyTypeDistribution() {
  const typeCount: Record<string, number> = {};
  top10Agencies.forEach(a => {
    typeCount[a.type] = (typeCount[a.type] || 0) + 1;
  });

  const data = {
    labels: Object.keys(typeCount),
    datasets: [
      {
        data: Object.values(typeCount),
        backgroundColor: [
          chartColors.primary,
          chartColors.secondary,
          chartColors.success,
          chartColors.warning,
          chartColors.danger,
        ],
        borderWidth: 2,
        borderColor: '#fff',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
