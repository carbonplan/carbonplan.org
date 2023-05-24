import { Box } from 'theme-ui'
import { Row, Column, Table, Heading } from '@carbonplan/components'

const AnnotatedTable = ({ heading, data, sidenote, widths = [3, 3] }) => {
  return (
    <Box>
      <Heading sx={{ mb: [4, 5, 6, 7] }} variant='h2' sidenote={sidenote}>
        {heading}
      </Heading>
      <Row>
        <Column start={[2, 3]} width={[5, 6, 6, 6]}>
          <Table
            data={data}
            columns={[6]}
            start={[
              [1, 1, 1, 1],
              [1, widths[0] + 1, widths[0] + 1, widths[0] + 1],
            ]}
            width={[
              [6, widths[0], widths[0], widths[0]],
              [6, widths[1], widths[1], widths[1]],
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
