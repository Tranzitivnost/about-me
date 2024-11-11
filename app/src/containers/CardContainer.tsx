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

interface Props {
  className: string;
}

const CardContainer = ({ className }: Props) => {
  const dispatch = useDispatch();
  const links = useSelector((state: RootState) => state.links);
  const person = useSelector((state: RootState) => state.person);

  const fetchLinks = async () => {
    try {
      const data = await apiRequest<LinkModel>("links");
      const links: LinkModel[] = data.map(el => el.fields);
      dispatch(setLinks(links));
    } catch (error) {
      console.error("Error loading links:", error);
    }
  };

  const fetchPerson = async () => {
    try {
      const data = await apiRequest<PersonModel>("persons");
      const persons: PersonModel[] = data.map(el => el.fields);
      dispatch(setPerson(persons[0]));
    } catch (error) {
      console.error("Error loading person:", error);
    }
  };

  useEffect(() => {
    fetchPerson();
    fetchLinks();
  }, []);

  if (!person.person || !links.links.length) {
    return null;
  }

  return (
    <Card
      className={className}
      name={person.person.name}
      jobRole={person.person.jobRole}
      location={person.person.location}
      surname={person.person.surname}
      links={[...links.links]}
    />
  );
};
export default CardContainer;
