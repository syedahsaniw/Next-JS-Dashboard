import React from 'react';
import {
  Typography, Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button
} from '@mui/material';
import { IconPlus, IconTransfer } from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';
import { IconTrash } from '@tabler/icons-react';

const transactions = [
  {
    id: "1",
    type: "Top-up",
    amount: "+$100",
    date: "2024-06-09",
  },
  {
    id: "2",
    type: "Withdrawal",
    amount: "-$50",
    date: "2024-06-08",
  },
  {
    id: "3",
    type: "Transfer",
    amount: "-$30",
    date: "2024-06-07",
  },
];

const WalletPage: React.FC = () => {
  return (
    <DashboardCard title="Wallet">
      <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<IconPlus />}
          >
            Top-up
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<IconTrash  />}
          >
            Withdraw
          </Button>
          <Button
            variant="contained"
            color="info"
            startIcon={<IconTransfer />}
          >
            Transfer
          </Button>
        </Box>
        <Table
          aria-label="transaction table"
          sx={{ whiteSpace: "nowrap", mt: 2 }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Type
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Amount
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Date
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>
                  <Typography variant="subtitle2">{transaction.type}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">{transaction.amount}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">{transaction.date}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default WalletPage;
