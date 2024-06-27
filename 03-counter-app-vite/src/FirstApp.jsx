import PropTypes from 'prop-types';
export const FirstApp = ( { 
  title = 'No tengo titulo', 
  subTitle = 'No tengo subtitulo', 
  name = 'Sin nombre'
} ) => {

  // console.log( props );

  return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      <p> { subTitle } </p>
      <p> { subTitle } </p>
      <p> { name } </p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

// FirstApp.defaultProps = {
//   // name: 'No tengo nombre',
//   subTitle: 'No tengo subtitulo',
//   title: 'No tengo titulo',
// }