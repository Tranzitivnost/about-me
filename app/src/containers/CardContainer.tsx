import React from "react";
import { apiRequest } from "../network/apiRequest";
import { LinkModel } from "../models/link.model";
import { PersonModel } from "../models/person.model";
import { useDispatch, useSelector } from "react-redux";
import { setLinks } from "../slices/linksSlice";
import { RootState } from "../store";
import { setPerson } from "../slices/personSlice";
import { useEffect } from "react";
import Card from "../ui/components/Card";

const CardContainer = () => {
  const dispatch = useDispatch();
  const links = useSelector((state: RootState) => state.links);
  const person = useSelector((state: RootState) => state.person);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const data = await apiRequest<LinkModel>("links");
        const links: LinkModel[] = data.map(el => el.fields);
        dispatch(setLinks(links));
      } catch (error) {
        console.error("Ошибка при запросе данных:", error);
      }
    };

    const fetchPerson = async () => {
      try {
        const data = await apiRequest<PersonModel>("persons");
        const persons: PersonModel[] = data.map(el => el.fields);
        dispatch(setPerson(persons[0]));
      } catch (error) {
        console.error("Ошибка при запросе данных:", error);
      }
    };

    fetchPerson();
    fetchLinks();
  }, []);

  if (!person.person) {
    return null;
  }

  return (
    <Card
      name={person.person.name}
      jobRole={person.person.jobRole}
      location={person.person.location}
      surname={person.person.surname}
      links={[...links.links]}
    />
  );
};
export default CardContainer;