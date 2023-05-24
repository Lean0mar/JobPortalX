import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import style from "./CardEmpleoDetail.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { relationVacantApplicant } from '../../Redux/Actions/actionsFunction/axtionsVacants';
import { useEffect } from 'react';
import { getUserDetail } from '../../Redux/Actions/actionsFunction/actionsUsers';


const CardEmpleoDetail = ({id, CompanyId, title, description, createdAt, Workday, WorkMethod}) => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.dataEmail[0].id);
  const userVacants = useSelector(state => state.UserDetail.Vacants);
  const vacantPostuled = userVacants?.find((vacant) => vacant.id === id);

  const relationIds = {
    VacantId: id,
    ApplicantId: currentUserId,
  };


  useEffect(() => {
    dispatch(getUserDetail(currentUserId));
  }, [dispatch, getUserDetail]);

const handlerClick = () => {
  dispatch(relationVacantApplicant(relationIds));
  dispatch(getUserDetail(currentUserId));

};

console.log(userVacants);
console.log(vacantPostuled);


  return (
    <Card style={{ width: '100%' }}>
      <div>
 <Card.Img className={style.logo} variant="top" src="https://th.bing.com/th/id/R.a30e39eb5d4a9e55f49c052732ad4504?rik=LwN38PDNxREmFw&riu=http%3a%2f%2fwww.cleankontor.de%2fwp-content%2fuploads%2f2015%2f02%2fGebaeudeservice-Gebaeudereinigung-Hamburg-300x300.png&ehk=gtecgngKr%2fcTb6%2b2AN9BhhSqvB8pTESppbZbM0LMDIg%3d&risl=&pid=ImgRaw&r=0"/>   
    </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Jornada: {Workday}</ListGroup.Item>
      <ListGroup.Item>Modalidad: {WorkMethod}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {!vacantPostuled ? (<Button onClick={handlerClick} className={style.btn} variant="outline-success">POSTULARME</Button>) 
        :
        (<Button onClick={handlerClick} className={style.btn} variant="outline-success" disabled>YA POSTULADO</Button>)}
      </Card.Body>
    </Card>
  );
}

export default CardEmpleoDetail;