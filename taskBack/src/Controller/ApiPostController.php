<?php

namespace App\Controller;
use App\Entity\Commande;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;

class ApiPostController extends AbstractController
{
    /**
     * @Route("/api/post", name="api_post_index" , methods={"GET"})
     */
    public function index( ProductRepository $productRepository)
    {   
       $products= $productRepository->findAll();
       dd($products);
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/ApiPostController.php',
        ]);
    }


    /**
     * @Route("/commande/ajout", name="ajout", methods={"POST"})
     */
    public function addcommande(Request $request , SerializerInterface $serializer , EntityManagerInterface $em)
    {
        // On vérifie si la requête est une requête Ajax
        
            // On instancie un nouvel commande
            $commande = new Commande();

            // On décode les données envoyées
            $donnees = $request->getContent() ;

            $post = $serializer -> deserialize($donnees , Commande::class , 'json');
           
            $em->persist($post);
            $em->flush();
            //dd($post);

         return $this->json($post , 201 , [] );
    }
}
