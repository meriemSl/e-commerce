<?php

namespace App\Controller;
use App\Entity\Commande;
use App\Entity\Commandes;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiPostController extends AbstractController
{
    // /**
    //  * @Route("/api/post", name="api_post_index" , methods={"GET"})
    //  */
    // public function index( ProductRepository $productRepository)
    // {   
    //    $products= $productRepository->findAll();
    //    dd($products);
    //     return $this->json([
    //         'message' => 'Welcome to your new controller!',
    //         'path' => 'src/Controller/ApiPostController.php',
    //     ]);
    // }


    /**
     * @Route("/commande/ajout", name="ajout", methods={"POST"})
     */
    public function addcommande(Request $request , SerializerInterface $serializer , EntityManagerInterface $em)
    {
        // On vérifie si la requête est une requête Ajax
        
            // On instancie un nouvel commande
            $commande = new Commandes();

            // On décode les données envoyées
            $donnees = $request->getContent() ;
            
            $post = $serializer -> deserialize($donnees , Commandes::class , 'json');
            $post -> setDateCommande(new \DateTime);
            $em->persist($post);
            $em->flush();
            //dd($post);

         return $this->json($post , 201 , [] );
    }
}
