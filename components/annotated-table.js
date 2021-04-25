import { Box, Themed } from 'theme-ui'
import { Row, Column, Table } from '@carbonplan/components'
import Sidenote from './sidenote'

const AnnotatedTable = ({ heading, data, sidenote, children }) => {
  return (
    <Box>
      <Row sx={{ mt: [5, 6, 7, 8], mb: [4, 5, 6, 7] }}>
        <Column start={[1, 2]} width={[6, 6]}>
          <Box variant='styles.h2' sx={{ my: [0, 0, 0, 0] }}>
            {heading}
          </Box>
        </Column>
        {sidenote && <Sidenote variant='h2'>{sidenote}</Sidenote>}
      </Row>
      <Row>
        <Column start={[2, 3]} width={[5, 6, 6, 6]}>
          <Table
            data={data}
            columns={[6]}
            start={[
              [1, 1, 1, 1],
              [1, 4, 4, 4],
            ]}
            width={[
              [6, 3, 3, 3],
              [6, 3, 3, 3],
            ]}
            borderBottom={false}
            borderTop={false}
          />
        </Column>
      </Row>
    </Box>
  )
}

export default AnnotatedTable
