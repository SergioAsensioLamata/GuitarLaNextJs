import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
    return(
        <Layout
            title={'Nosotros'}
            description={'Sobre nosotros, guitarLa, tienda de música'}
        >
            <main className="contenedor">
                <h1 className="heading">Nosotros</h1>

                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" alt="Imagen sobre nosotros" width={1000} height={800}/>            
                    <div>
                        <p> Nam laoreet felis arcu, ut vehicula risus rhoncus eu. Aenean lacinia felis in cursus ornare. Aliquam eget hendrerit sem, vel blandit ligula. Donec interdum nulla eget aliquet posuere. Fusce porta ex eget consectetur auctor. Vestibulum aliquet quis neque a fermentum. Mauris interdum vitae dolor a egestas.</p>

                        <p>Sed tincidunt, elit nec consectetur tristique, neque arcu fermentum metus, id sollicitudin metus dolor eu odio. Etiam eget velit tellus. Proin vel turpis urna. Curabitur aliquet, lectus id volutpat auctor, urna est hendrerit tortor, id faucibus diam mi ut diam. Nulla cursus ex lectus, vel varius felis vestibulum rhoncus. Pellentesque dignissim rhoncus justo nec varius.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}