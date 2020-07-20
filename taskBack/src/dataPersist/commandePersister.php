<?php

namespace App\dataPersist ;

use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use App\Entity\Commandes;
use Doctrine\ORM\EntityManagerInterface;


class commandePersister implements DataPersisterInterface {
   
     protected $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em ;
    }
    public function supports($data): bool
    {
        return $data instanceof Commandes;
        
    }
    public function persist($data)
    {
        $data->setDateCommande(new \DateTime);

        $this->em->persist($data);
        $this->em->flush($data);
    }
    public function remove($data)
    {
        $this->em->remove($data);
        $this->em->flush($data);
    }
}