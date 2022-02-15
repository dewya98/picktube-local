import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>검색 후 홈화면이 안 나타나요</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           브라우저 상단 새로 고침을 눌러 주시면 다시 보이실 거에요~^^
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>내용 수정이 안 됩니다.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           수정 한 내용이 화면에 바로 반영이 안 된 것 같군요. 새로 고침을 해주시면 수정한 내용으로 보이실 거에요!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
