import { api } from "@/services/api";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface PriceHistoryProps {
  currency?: string;
  days?: string;
  coin?: string;
}

export const PriceHistory = ({
  coin = "bitcoin",
  days = "7",
  currency = "usd",
}: PriceHistoryProps) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const params = {
      vs_currency: currency,
      days,
      x_cg_demo_api_key: import.meta.env.VITE_CRYPTO_API_KEY,
    };

    api
      .get(`/coins/${coin}/market_chart`, { params })
      .then(({ data }) => setResult(data.prices))
      .catch((err) => console.error(err));
  }, [coin, currency, days]);

  const options: ApexOptions = {
    chart: {
      type: "area",
      stacked: false,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "Histórico de Preços de uma Criptomoeda",
      align: "left",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      title: {
        text: "Preço",
      },
      labels: {
        formatter: function (val) {
          return new Intl.NumberFormat([], {
            style: "currency",
            currency: currency.toUpperCase(),
          }).format(val);
        },
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        formatter: function (val) {
          return new Date(val).toDateString();
        },
      },
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return new Intl.NumberFormat([], {
            style: "currency",
            currency: currency.toUpperCase(),
          }).format(val);
        },
      },
    },
  };

  const series: ApexAxisChartSeries = [
    { data: result, name: coin.toUpperCase() },
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart type="area" options={options} series={series} />
        </div>
      </div>
    </div>
  );
};
