//@ts-nocheck
// ** Icons Imports
import { Award } from "react-feather";

// ** Custom Components
import Avatar from "../../../../@core/components/avatar";

// ** Reactstrap Imports
import { Card, CardBody, CardText } from "reactstrap";

// ** Images
import decorationLeft from "../../../../assets/images/elements/decore-left.png";
import decorationRight from "../../../../assets/images/elements/decore-right.png";

const CardCongratulations = () => {
  return (
    <Card className="card-congratulations">
      <CardBody className="text-center">
        <img
          className="congratulations-img-left"
          src={decorationLeft}
          alt="decor-left"
        />
        <img
          className="congratulations-img-right"
          src={decorationRight}
          alt="decor-right"
        />
        <Avatar
          icon={<Award size={28} />}
          className="shadow"
          color="primary"
          size="xl"
        />
        <div className="text-center">
          <h1 className="mb-1 text-white">Добрый день, Владислав,</h1>
          <CardText className="m-auto w-75">
            Желаем хорошего рабочего дня
          </CardText>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardCongratulations;
