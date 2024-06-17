import React from 'react';
import { CSVLink } from 'react-csv';

const ExportToCSV = ({ eventData, averageRating }) => {
  const headers = [
    { label: "Event Name", key: "nome" },
    { label: "Date", key: "data" },
    { label: "Description", key: "descricao" },
    { label: "Location", key: "local" },
    { label: "Banner", key: "imgBanner" },
    { label: "Average Rating", key: "mediaAvaliacao" }, // Header for average rating
  ];

  // Prepare data for CSV export
  const data = [{
    nome: eventData.nome,
    data: eventData.data,
    descricao: eventData.descricao,
    local: eventData.local,
    imgBanner: eventData.imgBanner,
    mediaAvaliacao: averageRating.toFixed(1), // Assuming averageRating is a number
  }];

  return (
    <CSVLink data={data} headers={headers} filename={"eventos.csv"}>
      Exportar para CSV
    </CSVLink>
  );
};

export default ExportToCSV;
