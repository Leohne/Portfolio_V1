import icone from "../assets/JSON/icone.json"

function Skill () {
    const iconeJson = icone.map((item, index) => {
        return (
            <div className="icone_div" key={index}>
            <img className="icone_img" src={item.icone} alt={item.nom} />
            <p className="icone_p"> {item.nom} </p>
            </div>
            )
    })
    return (
        <section className="section_skill" id="competence">
            <h2 className="title_skill title">Compétences.</h2>
            <div className="div_skill"> {iconeJson} </div>
        </section>
    )
}

export default Skill