const User = () => {
    //Variaveis devem vir antes do return
    const name = "Heloisa";
  return (
    <>{/* Fragment: Abrigar vários elementos */ }
    <div>
        <h1>Olá, {name}!</h1>
    </div>
    </>
    
  );
}

export default User;