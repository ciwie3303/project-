// @ts-nocheck 
// ** React Imports
import { useEffect, useState } from "react";

// ** Third Party Components
import axios from "axios";
import Chart from "react-apexcharts";

// ** Utils
import { kFormatter } from "../../../../utility/Utils";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardText,
  Progress,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const AvgSessions = (props) => {
  // ** States
  const [data, setData] = useState(null);

  const db_data = {
    avg_sessions: {
      sessions: '1 560 000',
      last_days: ["Последние 28 дней", "Последний месяц", "Последний год"],
      growth: "+5.2%",
      goal: 100000,
      users: 100000,
      retention: 90,
      duration: 1,
    },
  };

  useEffect(() => {
    setData(db_data.avg_sessions);
  }, []);

  let options = {
    chart: {
      sparkline: { enabled: true },
      toolbar: { show: false },
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    states: {
      hover: {
        filter: "none",
      },
    },
    colors: [
      "#ebf0f7",
      "#ebf0f7",
      props.primary,
      "#ebf0f7",
      "#ebf0f7",
      "#ebf0f7",
    ],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
        borderRadius: [10],
      },
    },
    tooltip: {
      x: { show: false },
    },
    xaxis: {
      type: "numeric",
    },
  };

  let series = [
    {
      name: "Sessions",
      data: [75, 125, 225, 175, 125, 75, 25],
    },
  ];

  return data !== null ? (
    <Card>
      <CardBody>
        <Row className="pb-50">
          <Col
            sm={{ size: 6, order: 1 }}
            xs={{ order: 2 }}
            className="d-flex justify-content-between flex-column mt-lg-0 mt-2"
          >
            <div className="session-info mb-1 mb-lg-0">
              <h2 className="fw-bold mb-25">{data.sessions}₽</h2>
              <CardText className="fw-bold mb-2">Доход</CardText>
              <h5 className="font-medium-2">
                <span className="text-success me-50">{data.growth}</span>
                <span className="fw-normal">
                  по сравнению с прошлой неделей
                </span>
              </h5>
            </div>
            <Button color="primary">Посмотреть детали</Button>
          </Col>
          <Col
            sm={{ size: 6, order: 2 }}
            xs={{ order: 1 }}
            className="d-flex justify-content-between flex-column text-end"
          >
            <UncontrolledDropdown className="chart-dropdown">
              <DropdownToggle
                color=""
                className="bg-transparent btn-sm border-0 p-50"
              >
                Последняя неделя
              </DropdownToggle>
              <DropdownMenu end>
                {data.last_days.map((item) => (
                  <DropdownItem className="w-100" key={item}>
                    {item}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <Chart options={options} series={series} type="bar" height={200} />
          </Col>
        </Row>
        <hr />
        <Row className="pt-50">
          <Col className="mb-2" md="6" sm="12">
            <p className="mb-50">Goal: ${data.goal}</p>
            <Progress className="avg-session-progress mt-25" value="50" />
          </Col>
          <Col className="mb-2" md="6" sm="12">
            <p className="mb-50">Users: {kFormatter(data.users)}</p>
            <Progress
              className="avg-session-progress progress-bar-warning mt-25"
              value="60"
            />
          </Col>
          <Col md="6" sm="12">
            <p className="mb-50">Retention: {data.retention}%</p>
            <Progress
              className="avg-session-progress progress-bar-danger mt-25"
              value="70"
            />
          </Col>
          <Col md="6" sm="12">
            <p className="mb-50">Duration: {data.duration}yr</p>
            <Progress
              className="avg-session-progress progress-bar-success mt-25"
              value="80"
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  ) : null;
};
export default AvgSessions;
