interface Props {
  name: string;
  surname: string;
}

const Header = (props: Props) => {
  const { name, surname } = props;
  return(
    <header className="flex justify-evenly">
      <h1>Hello World!</h1>
      <h2>Welcome Mr. {`${surname}, ${name}`}</h2>
    </header>
  );
};

export default function Home() {
  
  return (
    <>
      <Header name="Lucas" surname="Xisto"/>
    </>
  );
};
